<?php

/*
Plugin Name: Custom Post Types for React Components
Description: Registra os Custom Post Types
Version: 1.0
Author: Felipe Tacara
*/

// Post para o componente /ui/Card
function register_card_post_type() {
  register_post_type('card', array(
    'label' => 'Card/React',
    'public' => true,
    'show_in_rest' => true,
    'show_in_graphql' => true,
    'graphql_single_name' => 'Card',
    'graphql_plural_name' => 'Cards',
    'supports' => array('title'),
  ));
}
add_action('init', 'register_card_post_type');

function register_productcard_post_type() {
  register_post_type('product_card', array(
    'label' => 'ProductCard/React',
    'public' => true,
    'show_in_rest' => true,
    'show_in_graphql' => true,
    'graphql_single_name' => 'ProductCard',
    'graphql_plural_name' => 'ProductCards',
    'supports' => array('title'),
  ));
}
add_action('init', 'register_productcard_post_type');

function register_products_post_type() {
  register_post_type('products', array(
    'label' => 'Products/React',
    'public' => true,
    'show_in_rest' => true,
    'show_in_graphql' => true,
    'graphql_single_name' => 'Product',
    'graphql_plural_name' => 'Products',
    'supports' => array('title'),
  ));
}
add_action('init', 'register_products_post_type');

function register_simple_gallery_post_type() {
  register_post_type('simple_gallery', array(
    'label' => 'SimpleGallery/React',
    'public' => true,
    'show_in_rest' => true,
    'show_in_graphql' => true,
    'graphql_single_name' => 'SimpleGallery',
    'graphql_plural_name' => 'SimpleGalleries',
    'supports' => array('title'),
  ));
}
add_action('init', 'register_simple_gallery_post_type');

function register_app_section_post_type() {
  register_post_type('app_section', array(
    'label' => 'AppSection/React',
    'public' => true,
    'show_in_rest' => true,
    'show_in_graphql' => true,
    'graphql_single_name' => 'AppSection',
    'graphql_plural_name' => 'AppSections',
    'supports' => array('title'),
  ));
}
add_action('init', 'register_app_section_post_type');

function register_tag_section_post_type() {
  register_post_type('tag_section', array(
    'label' => 'TagSection/React',
    'public' => true,
    'show_in_rest' => true,
    'show_in_graphql' => true,
    'graphql_single_name' => 'TagSection',
    'graphql_plural_name' => 'TagSections',
    'supports' => array('title'),
  ));
}
add_action('init', 'register_tag_section_post_type');

function register_form_post_type() {
  register_post_type('form_section', array(
    'label' => 'FormSection/React',
    'public' => true,
    'show_in_rest' => true,
    'show_in_graphql' => true,
    'graphql_single_name' => 'FormSection',
    'graphql_plural_name' => 'FormSections',
    'supports' => array('title'),
  ));
}
add_action('init', 'register_form_post_type');

function register_footer_post_type() {
  register_post_type('footer_section', array(
    'label' => 'FooterSection/React',
    'public' => true,
    'show_in_rest' => true,
    'show_in_graphql' => true,
    'graphql_single_name' => 'FooterSection',
    'graphql_plural_name' => 'FooterSections',
    'supports' => array('title'),
  ));
}
add_action('init', 'register_footer_post_type');

function register_navbar_post_type() {
  register_post_type('navbar_section', array(
    'label' => 'NavbarSection/React',
    'public' => true,
    'show_in_rest' => true,
    'show_in_graphql' => true,
    'graphql_single_name' => 'NavbarSection',
    'graphql_plural_name' => 'NavbarSections',
    'supports' => array('title'),
  ));
}
add_action('init', 'register_navbar_post_type');