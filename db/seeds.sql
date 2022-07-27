INSERT INTO department (name)
VALUES
    ('clothing'),
    ('home goods'),
    ('electronics');

INSERT INTO role (title, salary, department_id)
VALUES
    ('manager', 3500, 1),
    ('manager', 3500, 2),
    ('manager', 4500, 3),
    ('supervisor', 2000, 2),
    ('associate', 1000, 1),
    ('associate', 1000, 2),
    ('associate', 1500, 3);

INSERT INTO staff (first_name, last_name, role_id, manager_id)
VALUES
    ('Lisa', 'Frank', 1, 2),
    ('Mary', 'Gold', 1, 2),
    ('Geralt', 'of Rivia', 1, 3),
    ('Darth', 'Vader', 2, 2),
    ('Jimmy', 'Smits', 3, 1),
    ('Dave', 'Batiste', 3, 2),
    ('Easter', 'Bunny', 3, 3)