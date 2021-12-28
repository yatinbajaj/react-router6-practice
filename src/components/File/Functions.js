export function Person(name,age,emailId) {
    this.name = name;
    this.age = age;
    this.emailId = emailId;
}

export const showDetails = ({name,age,emailId}) => {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Email Id: " + emailId);
}

export const restOperatorDemo = (a,b,...nums) => {
    const arr = nums.map(num => num * 2);
    return arr;
}