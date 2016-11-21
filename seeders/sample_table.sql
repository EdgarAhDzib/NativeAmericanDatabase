use native_db;

CREATE table sample_content (
id INT(10) auto_increment primary key,
source_id varchar(20),
item_name varchar(100),
original_url varchar(100),
image_url varchar(100),
item_types varchar(100),
materials varchar(100),
cultures varchar(100),
institution varchar(100)
);