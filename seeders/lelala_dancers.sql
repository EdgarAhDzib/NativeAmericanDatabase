use native_db;

insert into native_db.text_contents (`item_title`,`group`,`period`,`if_published`,`createdAt`,`updatedAt`) values ('Le la la Dancers','Kwakwaka''wakw','Twenty-first Century',true,'2016-11-29 02:23:18','2016-11-29 02:23:18');

insert into native_db.source_refs (`content_id`,`url`,`contributor`,`createdAt`,`updatedAt`) values (206,'https://www.youtube.com/watch?v=-4bMCbbH0qk','Edgar Martin del Campo','2016-11-29 02:33:18','2016-11-29 02:33:18');

insert into native_db.content_fields (`content_id`,`ethn_id`,`createdAt`,`updatedAt`) values (206,'Potlatch','2016-11-29 02:39:00','2016-11-29 02:39:00');
insert into native_db.content_fields (`content_id`,`ethn_id`,`createdAt`,`updatedAt`) values (206,'Mask','2016-11-29 02:39:00','2016-11-29 02:39:00');
insert into native_db.content_fields (`content_id`,`ethn_id`,`createdAt`,`updatedAt`) values (206,'Dance','2016-11-29 02:39:00','2016-11-29 02:39:00');
insert into native_db.content_fields (`content_id`,`ethn_id`,`createdAt`,`updatedAt`) values (206,'Mask_Dance','2016-11-29 02:39:00','2016-11-29 02:39:00');
insert into native_db.content_fields (`content_id`,`ethn_id`,`createdAt`,`updatedAt`) values (206,'Mask_Ritual','2016-11-29 02:39:00','2016-11-29 02:39:00');

insert into native_db.media_sources (`content_id`,`youtube`,`museum`,`createdAt`,`updatedAt`) values (206,'-4bMCbbH0qk','MOA: University of British Columbia','2016-11-29 03:19:00','2016-11-29 03:19:00');