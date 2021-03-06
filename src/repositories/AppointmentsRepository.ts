import { isEqual } from 'date-fns';

import Appointment from '../models/Appointments';

interface AppointmentDTO {
  provider: string;
  date: Date;
}

export default class AppointmentRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public create({ provider, date }: AppointmentDTO): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );
    return findAppointment || null;
  }

  public all(): Appointment[] {
    return this.appointments;
  }
}
