import type { Schema, Attribute } from '@strapi/strapi';

export interface BasicsSection extends Schema.Component {
  collectionName: 'components_basics_sections';
  info: {
    displayName: 'Standard';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    text: Attribute.Blocks;
    image: Attribute.Media;
    files: Attribute.Media;
    teammembers: Attribute.Relation<
      'basics.section',
      'oneToMany',
      'api::team.team'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'basics.section': BasicsSection;
    }
  }
}
