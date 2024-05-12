// pages/api/register.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

type PrismaError = Prisma.PrismaClientKnownRequestError & {
  meta?: {
    target?: string[];
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { firstName, lastName, age, gender, email, password, confirmPassword } =
    req.body;

  // Validierung der Eingaben
  if (
    !firstName ||
    !lastName ||
    !age ||
    !gender ||
    !email ||
    !password ||
    !confirmPassword
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
    return res
      .status(400)
      .json({ error: "First name and last name should only contain letters" });
  }

  if (isNaN(Number(age)) || Number(age) <= 0) {
    return res.status(400).json({ error: "Age must be a valid number" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.usermodel.create({
      data: {
        firstname: String(firstName),
        lastname: String(lastName),
        age: Number(age),
        gender,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    const prismaError = error as PrismaError;
    if (prismaError instanceof Prisma.PrismaClientKnownRequestError) {
      if (
        prismaError.code === "P2002" &&
        prismaError.meta?.target?.includes("email")
      ) {
        return res.status(400).json({ error: "Email already exists" });
      }
    }
    res.status(500).json({ error: "User registration failed" });
  }
}
