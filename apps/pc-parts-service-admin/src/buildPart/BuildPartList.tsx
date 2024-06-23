import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BUILD_TITLE_FIELD } from "../build/BuildTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const BuildPartList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BuildParts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="build" source="build.id" reference="Build">
          <TextField source={BUILD_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="quantity" source="quantity" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
