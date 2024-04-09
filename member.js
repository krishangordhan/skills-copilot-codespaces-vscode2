function skillsMember() {
    var skills = ['HTML', 'CSS', 'JS', 'React', 'Node'];
    return (
        <ul>
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    );
}