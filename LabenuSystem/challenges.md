# challenge
## 1


SELECT * FROM student 
	WHERE class_id = 1; 

## 2


SELECT * FROM teacher where class_id = 0;

## 3 

select * from student_hobbies 
join student
on student.id = student_hobbies.student_id
join hobbies
on hobbies.id = student_hobbies.hobby_id
where hobbies.id =1;

## 4
delete from student_hobbies
where student_id =1;

delete from student
where id = 1;

## 5




