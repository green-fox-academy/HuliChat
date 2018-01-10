CREATE TABLE message_data ( message_text TEXT , from_user_id INT(50) , to_user_id INT(50) , time_stamp TIMESTAMP(6) , message_id INT(50));
CREATE TABLE user_data ( user_id INT(50) , user_pw VARCHAR(50) , user_pic TEXT , user_name VARCHAR(50));




INSERT INTO message_data (message_text, from_user_id, to_user_id, time_stamp, message_id) values ('SZIA HOGYVAGY?', 0, 1, NOW(), 0);
INSERT INTO user_data (user_id, user_pw, user_pic, user_name) values (0, "asd123", "something", "Seatis");

INSERT INTO message_data (message_text, from_user_id, to_user_id, time_stamp, message_id) values ('ne irj capslockkal', 1, 2, NOW(), 1);
INSERT INTO user_data (user_id, user_pw, user_pic, user_name) values (1, "not asd123", "somethingelse", "Attikam");

INSERT INTO message_data (message_text, from_user_id, to_user_id, time_stamp, message_id) values ('a greenfox meno', 2, 3, NOW(), 2);
INSERT INTO user_data (user_id, user_pw, user_pic, user_name) values (2, "maybe asd123", "not something else", "Luca");

INSERT INTO message_data (message_text, from_user_id, to_user_id, time_stamp, message_id) values ('check out this cool chat', 3, 4, NOW(), 3);
INSERT INTO user_data (user_id, user_pw, user_pic, user_name) values (3, "maybe asd123", "not something else", "Juan");

INSERT INTO message_data (message_text, from_user_id, to_user_id, time_stamp, message_id) values ('yeah man its awesome', 4, 0, NOW(), 4);
INSERT INTO user_data (user_id, user_pw, user_pic, user_name) values (4, "maybe asd123", "not something else", "Esmeralda");
