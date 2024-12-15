import type { Request, Response } from 'express';
import { User } from '@prisma/client';

import express from 'express'
import { PrismaClient, Prisma } from '@prisma/client';

const app = express()
const port = 3000
const prisma = new PrismaClient();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

async function createUser(data: Prisma.UserCreateInput): Promise<User> {
  const user = await prisma.user.create({
    data,
  });
  return user;
}

// POST route - create user
app.post('/users', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Prepare data for user creation
  const userData: Prisma.UserCreateInput = {
    username,
    password,
  };

  try {
    // Call createUser function to create the user
    const newUser: User = await createUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: 'User creation failed', details: error.message });
  }
});