<?php
/**
 * Plugin Name: Categorias Custom API
 */
add_action('rest_api_init', function () {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, x_api_token");
}, 15);

// Cria a tabela com os campos corretos
function categorias_criar_tabela() {
	global $wpdb;
	$tabela = $wpdb->prefix . 'categorias_custom';
	$charset_collate = $wpdb->get_charset_collate();

	$sql = "CREATE TABLE $tabela (
		id mediumint(9) NOT NULL AUTO_INCREMENT,
		categoria_1 text NOT NULL,
		categoria_2 text NOT NULL,
		categoria_3 text NOT NULL,
		categoria_4 text NOT NULL,
		data datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
		PRIMARY KEY  (id)
	) $charset_collate;";

	require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
	dbDelta($sql);
}
register_activation_hook(__FILE__, 'categorias_criar_tabela');

// Menu no admin para visualizar os dados
function categorias_registrar_menu() {
	add_menu_page('Categorias', 'Categorias', 'manage_options', 'categorias', 'categorias_pagina_html');
}
add_action('admin_menu', 'categorias_registrar_menu');

function categorias_pagina_html() {
	global $wpdb;
	$tabela = $wpdb->prefix . 'categorias_custom';
	$resultados = $wpdb->get_results("SELECT * FROM $tabela");

	echo '<div class="wrap"><h1>Categorias</h1><table class="wp-list-table widefat fixed striped">';
	echo '<thead><tr><th>ID</th><th>Categoria 1</th><th>Categoria 2</th><th>Categoria 3</th><th>Categoria 4</th><th>Data</th></tr></thead><tbody>';
	foreach ($resultados as $linha) {
		echo "<tr><td>{$linha->id}</td><td>{$linha->categoria_1}</td><td>{$linha->categoria_2}</td><td>{$linha->categoria_3}</td><td>{$linha->categoria_4}</td><td>{$linha->data}</td></tr>";
	}
	echo '</tbody></table></div>';
}

// Endpoint da API
add_action('rest_api_init', function () {
	register_rest_route('categorias/v1', '/salvar', [
		'methods'  => 'POST',
		'callback' => 'categorias_salvar_dados',
		'permission_callback' => '__return_true',
	]);
});

function categorias_salvar_dados($request) {
	global $wpdb;
	$dados = $request->get_json_params();

	$tabela = $wpdb->prefix . 'categorias_custom';

	$wpdb->insert($tabela, [
		'categoria_1' => sanitize_text_field($dados['categoria_1']),
		'categoria_2' => sanitize_text_field($dados['categoria_2']),
		'categoria_3' => sanitize_text_field($dados['categoria_3']),
		'categoria_4' => sanitize_text_field($dados['categoria_4']),
	]);

	return new WP_REST_Response(['success' => true], 200);
}
