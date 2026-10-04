function StudentList(){
    const students = ['Ahmad','Ali','Husna','Abdullah','Sarah','Zainab','Raghad','Sayed Hamed']
    return(
        <>
        <ul>
            {students.map((oneStudent) => 
            <li> {oneStudent !== 'Sayed Hamed' ? oneStudent : '' }</li>
             )}
        </ul>
        
        </>
    )
}

export default StudentList