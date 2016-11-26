use native_db;

CREATE table sample_content (
id INT(10) auto_increment primary key,
item_title varchar(100),
group_name varchar(100),
notes text,
main_desc text,
long_desc text,
note_context text,
research_notes text,
display text,
prim_doc text
);