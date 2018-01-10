CREATE TABLE message_data ( message_text TEXT , from_user_id INT(50) , to_user_id INT(50) , time_stamp TIMESTAMP(6) , message_id INT(50));

CREATE TABLE user_data ( user_id INT(50) , user_pw VARCHAR(50) , user_pic TEXT , user_name VARCHAR(50));




INSERT INTO message_data (message_text, from_user_id, to_user_id, time_stamp, message_id) values ('SZIA HOGYVAGY?', 0, 1, '', 0);
INSERT INTO user_data (user_id, user_pw, user_pic, user_name) values (0, "asd123", "something", "testytest")


INSERT INTO message_data (message_text, from_user_id, to_user_id, time_stamp, message_id) values ('pleasework', 0, 1, NOW, 2);