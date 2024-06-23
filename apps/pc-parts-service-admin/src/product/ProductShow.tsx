import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BUILD_TITLE_FIELD } from "../build/BuildTitle";
import { PRODUCT_TITLE_FIELD } from "./ProductTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="imageUrl" source="imageUrl" />
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="BuildPart"
          target="productId"
          label="BuildParts"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="build" source="build.id" reference="Build">
              <TextField source={BUILD_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="quantity" source="quantity" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
