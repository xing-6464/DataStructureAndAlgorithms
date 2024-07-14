class Student {
  constructor(
    public name: string,
    public scope: number,
  ) {}

  compare(student: Student) {
    return this.scope - student.scope
  }

  equals(student: Object) {
    if (Object.is(this, student)) return true

    if (student == null) return false

    const another = student as Student

    return this.scope == another.scope
  }

  toString() {
    return `Student(name=${this.name}, scope=${this.scope})`
  }
}

export default Student
