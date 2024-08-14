import React,{Component} from 'react';

class Student
{
constructor(id,name,company,salary)
{
this.id=id;
this.name=name;
this.company=company;
this.salary=salary;
}
getId()
{
return this.id;
}
getName()
{
return this.name;
}
getCompany()
{
return this.company;
}
getSalary()
{
return this.salary;
}
}


function AppExample2(){
const students=[];
const placementYear=2021;

students.push(new Student(101,"Aditya","Grow","20 LPA"));
students.push(new Student(102,"Sapan","MAQ Software","10 LPA"));
students.push(new Student(103,"Swati","Infosys","15 LPA"));
students.push(new Student(104,"Aditi","TCS Digital","9.5 LPA"));
students.push(new Student(105,"Tanish","Microsoft","52 LPA"));


return (
<div>
<h1>ABCD Institute Of Technology</h1>
<PlacementList students={students} placementYear={placementYear} />
</div>
);
}

class PlacementList extends React.Component
{
constructor(props)
{
super(props);
this.state={
"students":props.students,
"placementYear":props.placementYear
};
}
render(){
return(
<div>
<h3>Placement {this.state.placementYear} </h3>
<ul>
{
this.state.students.map(function(student){
return(
<div>
Name: <b>{student.name}</b><br/>
Company: <b>{student.company}</b><br/>
Salary: <b>{student.salary}</b><br/>
<hr/>
</div>
)	
})
}
</ul> 
</div>
);
}
}

export default AppExample2;