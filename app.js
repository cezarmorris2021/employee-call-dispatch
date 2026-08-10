// CallFlow v0.2
const callFlow = {
  routeCursor: 0,
  onDuty(employees){ return employees.filter(e => e.onDuty && !e.busy); },
  nextEmployee(employees){
    const pool=this.onDuty(employees);
    if(!pool.length) return null;
    const employee=pool[this.routeCursor % pool.length];
    this.routeCursor++;
    return employee;
  }
};
