INSERT INTO departments (department_name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");

INSERT INTO roles (department_id, role_name, salary)
VALUES (1, "Senior Engineer", 120000),
       (1, "Junior Engineer", 90000),
       (2, "Finance Director", 100000),
       (2, "Accountant", 100000),
       (3, "Legal Administrative Manager", 130000),
       (3, "Legal Administrative Assistant", 110000),
       (4, "Sales Manager", 105000),
       (4, "Advertising Manager", 95000);

-- INSERT INTO employees (role_id, first_name, last_name, manager_id)
-- VALUES (1, "Senior Engineer", 120000),
--        (1, "Junior Engineer", 90000),
--        (2, "Finance Director", 100000),
--        (2, "Accountant", 100000),
--        (3, "Legal Administrative Manager", 130000),
--        (3, "Legal Administrative Assistant", 110000),
--        (4, "Sales Manager", 105000),
--        (4, "Advertising Manager", 95000);
       
