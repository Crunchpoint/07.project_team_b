-- CREATE SEQUENCE seq_user_info START WITH 1 INCREMENT BY 1;

-- CREATE TABLE userinfo (
--     user_id NUMBER PRIMARY KEY, email VARCHAR2(100) NOT NULL, user_name VARCHAR2(100) NOT NULL, profile_img VARCHAR2(100), is_admin NUMBER(1) DEFAULT 0
-- );

-- CREATE SEQUENCE seq_board START WITH 1 INCREMENT BY 1;

-- CREATE TABLE board (
--     board_id NUMBER PRIMARY KEY, user_id NUMBER, content VARCHAR2(1000) NOT NULL, board_img VARCHAR2(100), user_name VARCHAR2(100) NOT NULL, FOREIGN KEY (user_id) REFERENCES userinfo(user_id)
-- );

-- CREATE SEQUENCE seq_comment START WITH 1 INCREMENT BY 1;

-- CREATE TABLE commenttable (
--     comment_id NUMBER PRIMARY KEY, board_id NUMBER, user_id NUMBER, user_name VARCHAR2(100) NOT NULL, comments VARCHAR2(1000) NOT NULL, FOREIGN KEY (board_id) REFERENCES board(board_id), FOREIGN KEY (user_id) REFERENCES userinfo(user_id)
-- );

-- CREATE SEQUENCE seq_like START WITH 1 INCREMENT BY 1;

-- CREATE TABLE like_ (
--     like_id NUMBER PRIMARY KEY, board_id NUMBER, user_id NUMBER, user_name VARCHAR2(100) NOT NULL, is_like NUMBER(1) DEFAULT 0, FOREIGN KEY (board_id) REFERENCES board(board_id), FOREIGN KEY (user_id) REFERENCES userinfo(user_id)
-- );

SELECT *
FROM userinfo
ORDER BY user_name DESC