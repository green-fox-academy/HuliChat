create table USER (
	user_id VARCHAR(50),
	user_name VARCHAR(50),
	user_pw VARCHAR(50),
	user_pic VARCHAR(500),
);

create table message (
	message_id VARCHAR(50),
	to_userid VARCHAR(50),
	text_message VARCHAR(500),
	time_stamp VARCHAR(50),
);