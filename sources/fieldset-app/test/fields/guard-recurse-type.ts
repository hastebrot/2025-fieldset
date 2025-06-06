// @ts-nocheck
type RecLevel = 0 | 1 | 2 | 3 | 4 | 5;
type RecLevelNext = [1, 2, 3, 4, 5, "any"];
type RecIncrLevel<T> = T extends RecLevel ? RecLevelNext[T] : "any";

export type Field<TLevel = 0> = {
  name: string;
  field: TLevel extends "any" ? any : Field<RecIncrLevel<TLevel>>;
};

export const field: Field = {
  field: {
    name: 1,
    field: {
      name: 2,
      field: {
        name: 3,
        field: {
          name: 4,
          field: {
            name: 5,
            field: {
              name: 6,
              field: {
                name: 7,
              },
            },
          },
        },
      },
    },
  },
};
