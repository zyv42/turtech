/*
 SCHEMA
 */
DROP SCHEMA IF EXISTS turtech;
CREATE SCHEMA turtech;

CREATE TABLE turtech.products
(
    id SERIAL PRIMARY KEY,
    discontinued BOOLEAN NOT NULL,
    manufacturer VARCHAR(255) DEFAULT NULL,
    category VARCHAR(255) DEFAULT NULL,
    condition VARCHAR(255) default null,
    description TEXT,
    specifications TEXT,
    in_stock_number INT NOT NULL,
    list_price DOUBLE PRECISION NOT NULL,
    our_price DOUBLE PRECISION NOT NULL,
    manufacture_date DATE DEFAULT NULL,
    shipping_weight DOUBLE PRECISION NOT NULL,
    "name" VARCHAR(255) DEFAULT NULL,
    created_date TIMESTAMP NOT NULL,
    created_by VARCHAR(255) NOT NULL,
    last_modified_date TIMESTAMP NOT NULL,
    last_modified_by VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS turtech.user_reviews;

CREATE TABLE turtech.user_reviews
(
    id SERIAL PRIMARY KEY,
    "text" TEXT,
    "timestamp" TIMESTAMP NOT NULL,
    author_name VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    product_id BIGINT NOT NULL
);

DROP TABLE IF EXISTS turtech.user_payment_options;

CREATE TABLE turtech.user_payment_options
(
    id SERIAL PRIMARY KEY,
    card_name VARCHAR(255) DEFAULT NULL,
    card_number VARCHAR(255) DEFAULT NULL,
    cvc INT NOT NULL,
    default_payment_option BOOLEAN DEFAULT false,
    expiry_month INT NOT NULL,
    expiry_year INT NOT NULL,
    holder_name VARCHAR(255) DEFAULT NULL,
    type VARCHAR(255) DEFAULT NULL,
    user_id VARCHAR(255) DEFAULT NULL,
    billing_address_id BIGINT DEFAULT NULL
);

DROP TABLE IF EXISTS turtech.user_shipping_addresses;

CREATE TABLE turtech.user_shipping_addresses
(
    id SERIAL PRIMARY KEY,
    shipping_address_city VARCHAR(255) DEFAULT NULL,
    shipping_address_country VARCHAR(255) DEFAULT NULL,
    shipping_address_name VARCHAR(255) DEFAULT NULL,
    shipping_address_street1 VARCHAR(255) DEFAULT NULL,
    shipping_address_street2 VARCHAR(255) DEFAULT NULL,
    shipping_address_zipcode VARCHAR(255) DEFAULT NULL,
    user_id VARCHAR(255) DEFAULT NULL
);

DROP TABLE IF EXISTS turtech.user_billing_addresses;

CREATE TABLE turtech.user_billing_addresses
(
    id SERIAL PRIMARY KEY,
    billing_address_city VARCHAR(255) DEFAULT NULL,
    billing_address_country VARCHAR(255) DEFAULT NULL,
    billing_address_name VARCHAR(255) DEFAULT NULL,
    billing_address_street1 VARCHAR(255) DEFAULT NULL,
    billing_address_street2 VARCHAR(255) DEFAULT NULL,
    billing_address_zipcode VARCHAR(255) DEFAULT NULL,
    user_id VARCHAR(255) DEFAULT NULL
);

DROP TABLE IF EXISTS turtech.user_orders;

CREATE TABLE turtech.user_orders
(
    id SERIAL PRIMARY KEY,
    order_date TIMESTAMP DEFAULT NULL,
    order_status VARCHAR(255) DEFAULT NULL,
    order_total DECIMAL(19,2) DEFAULT NULL,
    shipping_date TIMESTAMP DEFAULT NULL,
    shipping_method VARCHAR(255) DEFAULT NULL,
    billing_address_id BIGINT DEFAULT NULL,
    payment_option_id BIGINT DEFAULT NULL,
    shipping_address_id BIGINT DEFAULT NULL,
    user_id VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS turtech.order_payment_options;

CREATE TABLE turtech.order_payment_options
(
    id SERIAL PRIMARY KEY,
    card_name VARCHAR(255) DEFAULT NULL,
    card_number VARCHAR(255) DEFAULT NULL,
    cvc INT NOT NULL,
    default_payment_option BOOLEAN DEFAULT false,
    expiry_month INT NOT NULL,
    expiry_year INT NOT NULL,
    holder_name VARCHAR(255) DEFAULT NULL,
    type VARCHAR(255) DEFAULT NULL
);

DROP TABLE IF EXISTS turtech.order_shipping_addresses;

CREATE TABLE turtech.order_shipping_addresses
(
    id SERIAL PRIMARY KEY,
    shipping_address_city VARCHAR(255) DEFAULT NULL,
    shipping_address_country VARCHAR(255) DEFAULT NULL,
    shipping_address_name VARCHAR(255) DEFAULT NULL,
    shipping_address_street1 VARCHAR(255) DEFAULT NULL,
    shipping_address_street2 VARCHAR(255) DEFAULT NULL,
    shipping_address_zipcode VARCHAR(255) DEFAULT NULL
);

DROP TABLE IF EXISTS turtech.order_billing_addresses;

CREATE TABLE turtech.order_billing_addresses
(
    id SERIAL PRIMARY KEY,
    billing_address_city VARCHAR(255) DEFAULT NULL,
    billing_address_country VARCHAR(255) DEFAULT NULL,
    billing_address_name VARCHAR(255) DEFAULT NULL,
    billing_address_street1 VARCHAR(255) DEFAULT NULL,
    billing_address_street2 VARCHAR(255) DEFAULT NULL,
    billing_address_zipcode VARCHAR(255) DEFAULT NULL
);

DROP TABLE IF EXISTS turtech.order_cart_items;

CREATE TABLE turtech.order_cart_items
(
    id SERIAL PRIMARY KEY,
    qty INT NOT NULL,
    subtotal DECIMAL(19,2) DEFAULT NULL,
    product_name VARCHAR(255) DEFAULT NULL,
    product_id BIGINT DEFAULT NULL,
    order_id BIGINT DEFAULT NULL
);

/*
 DATA
 */
INSERT INTO turtech.products
(discontinued, manufacturer, category, condition,
 description, specifications, in_stock_number, list_price, our_price,
 manufacture_date, shipping_weight, name,
 created_date, created_by, last_modified_date, last_modified_by)
VALUES
(false, 'Apple', 'Laptops', 'New', 'Lorem ipsum dolor sit amet,
consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque
facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi
perspiciatis molestias iure, ducimus!', 'Lorem ipsum dolor sit amet, consectetur
adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta.
Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis
molestias iure, ducimus!', 5, 1200.00, 999.00, '2018-10-24', 10.00, 'Apple
McBook', '2018-10-24', 'admin', '2018-10-24', 'admin'),
(false, 'Samsung', 'Cellphones', 'New', 'Lorem ipsum dolor sit amet,
consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque
facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi
perspiciatis molestias iure, ducimus!', 'Lorem ipsum dolor sit amet, consectetur
adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta.
Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis
molestias iure, ducimus!', 5, 470.00, 390.00, '2018-10-24', 10.00, 'Samsung
Galaxy S65', '2018-10-24', 'admin', '2018-10-24', 'admin'),
(false, 'LG', 'Tablets', 'New', 'Lorem ipsum dolor sit amet, consectetur
adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta.
Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis
molestias iure, ducimus!', 'Lorem ipsum dolor sit amet, consectetur adipisicing
elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id
dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias
iure, ducimus!', 5, 300.00, 289.00, '2018-10-24', 10.00, 'LG Tablet', '2018-10-24', 'admin', '2018-10-24', 'admin'),
(false, 'Dell', 'Laptops', 'New', 'Lorem ipsum dolor sit amet,
consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque
facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi
perspiciatis molestias iure, ducimus!', 'Lorem ipsum dolor sit amet, consectetur
adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta.
Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis
molestias iure, ducimus!', 5, 450.00, 399.00, '2018-10-24', 10.00, 'Dell
Latitude e6230', '2018-10-24', 'admin', '2018-10-24', 'admin'),
(false, 'Nokia', 'Cellphones', 'New', 'Lorem ipsum dolor sit amet,
consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque
facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi
perspiciatis molestias iure, ducimus!', 'Lorem ipsum dolor sit amet, consectetur
adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta.
Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis
molestias iure, ducimus!', 5, 12.00, 9.00, '2018-10-24', 10.00, 'Nokia 6230', '2018-10-24', 'admin', '2018-10-24', 'admin'),
(false, 'Apple', 'Tablets', 'New', 'Lorem ipsum dolor sit amet,
consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque
facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi
perspiciatis molestias iure, ducimus!', 'Lorem ipsum dolor sit amet, consectetur
adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta.
Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis
molestias iure, ducimus!', 5, 700.00, 699.00, '2018-10-24', 10.00, 'Apple
Ipad', '2018-10-24', 'admin', '2018-10-24', 'admin'),
(false, 'Asus', 'Laptops', 'New', 'Lorem ipsum dolor sit amet,
consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque
facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi
perspiciatis molestias iure, ducimus!', 'Lorem ipsum dolor sit amet, consectetur
adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta.
Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis
molestias iure, ducimus!', 5, 1100.00, 899.00, '2018-10-24', 10.00, 'Asus
N61Jv', '2018-10-24', 'admin', '2018-10-24', 'admin'),
(false, 'Meizu', 'Cellphones', 'New', 'Lorem ipsum dolor sit amet,
consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque
facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi
perspiciatis molestias iure, ducimus!', 'Lorem ipsum dolor sit amet, consectetur
adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta.
Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis
molestias iure, ducimus!', 5, 300.00, 259.00, '2018-10-24', 10.00, 'Meizu M2
Note', '2018-10-24', 'admin', '2018-10-24', 'admin'),
(false, 'Apple', 'Tablets', 'New', 'Lorem ipsum dolor sit amet,
consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque
facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi
perspiciatis molestias iure, ducimus!', 'Lorem ipsum dolor sit amet, consectetur
adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta.
Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis
molestias iure, ducimus!', 5, 600.00, 449.00, '2018-10-24', 10.00, 'Apple Ipad
Pro', '2018-10-24', 'admin', '2018-10-24', 'admin'),
(false, 'Acer', 'Laptops', 'New', 'Lorem ipsum dolor sit amet,
consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque
facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi
perspiciatis molestias iure, ducimus!', 'Lorem ipsum dolor sit amet, consectetur
adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta.
Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis
molestias iure, ducimus!', 5, 800.00, 569.00, '2018-10-24', 10.00, 'Acer
Laptop', '2018-10-24', 'admin', '2018-10-24', 'admin'),
(false, 'Xiaomi', 'Cellphones', 'New', 'Lorem ipsum dolor sit amet,
consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque
facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi
perspiciatis molestias iure, ducimus!', 'Lorem ipsum dolor sit amet, consectetur
adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta.
Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis
molestias iure, ducimus!', 5, 400.00, 299.00, '2018-10-24', 10.00, 'Xiaomi
Mi2', '2018-10-24', 'admin', '2018-10-24', 'admin');

INSERT INTO turtech.user_reviews
(text, timestamp, author_name, user_id, product_id)
VALUES
('good product', '2007-12-03T10:15:30', 'demo_user', '43cf2dbc-845b-488e-b139-2c6ef80b0297', 1);

INSERT INTO turtech.user_shipping_addresses
(shipping_address_city, shipping_address_country, shipping_address_name,
 shipping_address_street1, shipping_address_street2, shipping_address_zipcode, user_id)
VALUES
('default_city', 'default_country', 'default_name', 'default_street1', 'default_street2',
 'default_zipcode', '43cf2dbc-845b-488e-b139-2c6ef80b0297');

INSERT INTO turtech.user_payment_options
(card_name, card_number, cvc, default_payment_option, expiry_month, expiry_year,
 holder_name, type, user_id, billing_address_id)
VALUES
('VISA', '1234567890', '700', true, 10, 2025, 'ivan ivanov', 'credit card',
 '43cf2dbc-845b-488e-b139-2c6ef80b0297', 1);

INSERT INTO turtech.user_billing_addresses
(billing_address_city, billing_address_country, billing_address_name,
 billing_address_street1, billing_address_street2, billing_address_zipcode, user_id)
VALUES
('default_city', 'default_country', 'default_name', 'default_street1', 'default_street2',
 'default_zipcode', '43cf2dbc-845b-488e-b139-2c6ef80b0297');

INSERT INTO turtech.user_orders
(order_date, order_status, order_total, shipping_date, shipping_method,
 billing_address_id, payment_option_id, shipping_address_id, user_id)
VALUES
('2007-12-03T10:15:30', 'PENDING', 2000.00, '2008-12-03T10:15:30', 'FedEX',
 1, 1, 1, '43cf2dbc-845b-488e-b139-2c6ef80b0297');

INSERT INTO turtech.order_shipping_addresses
(shipping_address_city, shipping_address_country, shipping_address_name,
 shipping_address_street1, shipping_address_street2, shipping_address_zipcode)
VALUES
('default_city', 'default_country', 'default_name', 'default_street1', 'default_street2',
 'default_zipcode');

INSERT INTO turtech.order_payment_options
(card_name, card_number, cvc, default_payment_option, expiry_month, expiry_year,
 holder_name, type)
VALUES
('VISA', '1234567890', '700', true, 10, 2025, 'ivan ivanov', 'credit card');

INSERT INTO turtech.order_billing_addresses
(billing_address_city, billing_address_country, billing_address_name,
 billing_address_street1, billing_address_street2, billing_address_zipcode)
VALUES
('default_city', 'default_country', 'default_name', 'default_street1', 'default_street2',
 'default_zipcode');

INSERT INTO turtech.order_cart_items
(qty, subtotal, product_name, product_id, order_id)
VALUES
(
 3, 120.00, 'Apple McBook', 1, 1
)