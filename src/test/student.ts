class Student {
  constructor(public name: string, public scope: number) {}

  toString() {
    return `Student(name=${this.name}, scope=${this.scope})`
  }
}

export default Student
