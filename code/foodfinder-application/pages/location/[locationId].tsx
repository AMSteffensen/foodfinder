import Head from "next/head";
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  PreviewData,
  NextPage,
} from "next";
import LocationDetail from "components/locations-details";
import dbConnect from "middleware/db-connect";
import { findLocationsById } from "mongoose/locations/services";
import { LocationType } from "mongoose/locations/schema";
import { ParsedUrlQuery } from "querystring";

const Location: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const location: LocationType = JSON.parse(props.data?.location);
  const title = `The Food Finder - Details for ${location?.name}`;
  return (
    <div>
      {" "}
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={`The Food Finder.
                          Details for ${location?.name}`}
        />
      </Head>
      <h1>{location?.name}</h1>
      <LocationDetail location={location} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  let locations: LocationType[] | [];
  const { locationId } = context.query;
  try {
    await dbConnect();
    locations = await findLocationsById([locationId as string]);
    if (!locations.length) {
      throw new Error(`Locations ${locationId} not found`);
    }
  } catch (err: any) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data: { location: JSON.stringify(locations.pop()) } },
  };
};

export default Location;
