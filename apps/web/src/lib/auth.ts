// Clerk authentication stub.
// In a real scenario, this would export currentUser, auth, and other utilities from @clerk/nextjs.

export const currentUser = async () => {
  // Stub for local development before fully integrating Clerk
  return {
    id: "user_stub_123",
    email: "admin@valtrex.com",
    name: "Admin User",
    role: "ADMIN"
  };
};

export const requireAuth = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("Unauthorized");
  }
  return user;
};
