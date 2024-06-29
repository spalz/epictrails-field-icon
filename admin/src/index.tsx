import { prefixPluginTranslations } from "@strapi/helper-plugin";

import pluginPkg from "../../package.json";
import pluginId from "./pluginId";
import Initializer from "./components/Initializer";
import PluginIcon from "./components/PluginIcon";

const name = pluginPkg.strapi.name;

export default {
  register(app: any) {
    // app.addMenuLink({
    //   to: `/plugins/${pluginId}`,
    //   icon: PluginIcon,
    //   intlLabel: {
    //     id: `${pluginId}.plugin.name`,
    //     defaultMessage: name,
    //   },
    //   Component: async () => {
    //     const component = await import("./pages/App");

    //     return component;
    //   },
    //   permissions: [
    //     // Uncomment to set the permissions of the plugin here
    //     // {
    //     //   action: '', // the action name should be plugin::plugin-name.actionType
    //     //   subject: null,
    //     // },
    //   ],
    // });
    const plugin = {
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    };

    app.registerPlugin(plugin);

    app.customFields.register({
      name: "icon-picker",
      pluginId: pluginId,
      type: "string", // the icon will be stored JSON object stringified
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: name,
      },
      intlDescription: {
        id: "heroicons-field.icon-picker.description",
        defaultMessage: "Select a heroicon",
      },
      icon: PluginIcon,
      components: {
        Input: async () => import("./components/IconPickerField/IconPickerField"),
      },
      options: {
        advanced: [
          {
            sectionTitle: {
              id: "global.settings",
              defaultMessage: "Settings",
            },
            items: [
              {
                name: "required",
                type: "checkbox",
                intlLabel: {
                  id: "heroicons-field.options.advanced.requiredField",
                  defaultMessage: "Required field",
                },
                description: {
                  id: "heroicons-field.options.advanced.requiredField.description",
                  defaultMessage:
                    "You won't be able to create an entry if this field is empty",
                },
              },
            ],
          },
        ],
      },
    });
  },

  bootstrap(app: any) {},

  async registerTrads(app: any) {
    const { locales } = app;

    const importedTrads = await Promise.all(
      (locales as any[]).map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
