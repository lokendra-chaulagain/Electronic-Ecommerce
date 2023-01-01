import { Box, Stack } from "@mui/material";
import { useContext } from "react";
import CardLarge from "../components/dashboard/CardLarge";
import CardMedium from "../components/dashboard/CardMedium";
import CardSmall from "../components/dashboard/CardSmall";
import Header from "../components/Header";
import { useGetCategoriesQuery } from "../api/apiSlice";

export default function Home() {
  const { data: colors, isLoading, isError, } = useGetCategoriesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  console.log(colors);
  return (
    <Stack spacing={2}>
      <Header />
      <Stack
        direction="row"
        spacing={2}>
        <CardMedium
          title={"Team Members"}
          item={8}
        />

        <CardMedium
          title={"Total Services"}
          item={11}
        />

        <CardMedium
          title={"Total Packages"}
          item={5}
        />

        <CardMedium
          title={"Total Destination"}
          item={14}
        />
      </Stack>

      <Stack
        direction="row"
        spacing={2}>
        <CardSmall
          title={"New Mails"}
          item={8}
        />
        <CardSmall
          title={"Total Blogs"}
          item={12}
        />
        <CardSmall
          title={"Pending  Tour"}
          item={12}
        />
        <CardSmall
          title={"Completed  Tour"}
          item={18}
        />
      </Stack>

      <Stack
        direction="row"
        spacing={2}>
        <CardLarge />
        <CardLarge />
        <CardLarge />
        <CardLarge />
      </Stack>
    </Stack>
  );
}
