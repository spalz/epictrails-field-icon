import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => {
  strapi.customFields.register({
    name: "icon-picker",
    plugin: "field-icon",
    type: "text",
  });
};
