import { Card, DataTable, Link } from "@shopify/polaris";
import { GroupHomeButton } from "./GroupHomeButton";

export function HomeTable() {
  const rows = [
    [
      <Link url={`/1`}>Emerald Silk Gown</Link>,
      "1 day",
      <GroupHomeButton id={1} />,
    ],
    [
      <Link url={`/1`}>Emerald Silk Gown</Link>,
      "20 minutes",
      <GroupHomeButton id={1} />,
    ],
    [
      <Link url={`/1`}>Emerald Silk Gown</Link>,
      "10 hours",
      <GroupHomeButton id={1} />,
    ],
  ];

  return (
    <Card sectioned>
      <DataTable
        columnContentTypes={["text", "text", "text"]}
        headings={["Name", "Status", "Operation"]}
        rows={rows}
        footerContent={`Showing ${rows.length} of ${rows.length} results`}
        hoverable={true}
      />
    </Card>
  );
}
