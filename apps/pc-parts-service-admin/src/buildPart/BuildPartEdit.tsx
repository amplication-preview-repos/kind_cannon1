import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { BuildTitle } from "../build/BuildTitle";
import { ProductTitle } from "../product/ProductTitle";

export const BuildPartEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="build.id" reference="Build" label="build">
          <SelectInput optionText={BuildTitle} />
        </ReferenceInput>
        <ReferenceInput source="product.id" reference="Product" label="product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="quantity" source="quantity" />
      </SimpleForm>
    </Edit>
  );
};
