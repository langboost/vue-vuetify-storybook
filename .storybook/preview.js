import Vue from 'vue'
import Vuetify from 'vuetify'
import { options } from '../src/plugins/vuetify' // <== important

// configure Vue to use Vuetify
Vue.use(Vuetify)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (story, context) => {
    // instantiate Vuetify instance with any component/story level params
    const vuetify = new Vuetify(options)
    // wrap the passed component within the passed context
    const wrapped = story(context)
    // extend Vue to use Vuetify around the wrapped component
    return Vue.extend({
      vuetify,
      components: { wrapped },
      template: `<code>
        <v-app>
          <v-container fluid>
            <wrapped />
          </v-container>
        </v-app>
      </code>`
    })
  },
]
