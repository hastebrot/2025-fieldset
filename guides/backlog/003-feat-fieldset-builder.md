## feat: Fieldset builder.

| original estimate | estimate | actual effort | remaining effort |
| --- | --- | --- | --- |
| 8h | - | - | - |

**acceptance criteria:**

**out of scope:**

**task breakdown:**

**testing instructions:**

**open questions:**

**technical details:**
- fields are the building blocks of payload, https://payloadcms.com/docs/fields/overview
- fields define a schema of entity types that are stored in the database. Most fields save data to the database (data fields), some fields are presentational (layout fields).
- fields can have field-level data validations, access controls, hooks side-effects, conditional logic, and more.
- all fields require a `type` property. all data fields require a `name` property.

**dependencies:**

**references:**
- meanwhile the payload cms types:
- 240 loc for payload config, https://github.com/payloadcms/payload/blob/v3.41.0/packages/payload/src/types/index.ts
- 640 loc for collections config, https://github.com/payloadcms/payload/blob/v3.41.0/packages/payload/src/collections/config/types.ts
- 1880 loc for fields config, https://github.com/payloadcms/payload/blob/v3.41.0/packages/payload/src/fields/config/types.ts

**artifacts:**

**worklog:**
