import { appointments, contactMessages, type Appointment, type InsertAppointment, type ContactMessage, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAppointments(): Promise<Appointment[]>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private appointments: Map<number, Appointment>;
  private contactMessages: Map<number, ContactMessage>;
  private currentAppointmentId: number;
  private currentContactMessageId: number;

  constructor() {
    this.appointments = new Map();
    this.contactMessages = new Map();
    this.currentAppointmentId = 1;
    this.currentContactMessageId = 1;
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = this.currentAppointmentId++;
    const appointment: Appointment = {
      ...insertAppointment,
      id,
      createdAt: new Date(),
    };
    this.appointments.set(id, appointment);
    return appointment;
  }

  async createContactMessage(insertContactMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactMessageId++;
    const contactMessage: ContactMessage = {
      ...insertContactMessage,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }

  async getAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values());
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
}

export const storage = new MemStorage();
