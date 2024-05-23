// Replace with real logic
const createSession = (user: unknown) => "session-id";
// Replace with real logic
const getUser = (email: string, password: string) => ({ name: "Luke" });
// Replace with real validation
const validValue = (v: unknown): v is string =>
  typeof v === "string" && v.length > 0;

export default defineFormActions({
  signIn: async (event) => {
    // h3 exports a readFormData to obtain a FormData object
    const formData = await readFormData(event);
    const email = formData.get("email");
    const password = formData.get("password");

    // Handle your errors
    if (!validValue(email)) {
      return actionResponse(
        event,
        { email, invalid: true },
        { error: { message: "Invalid email" } }
      );
    }
    if (!validValue(password)) {
      return actionResponse(
        event,
        { email, invalid: true },
        { error: { message: "Invalid password" } }
      );
    }

    // Load the user
    const user = getUser(email, password);
    if (!user) {
      return actionResponse(
        event,
        { email, incorrect: true },
        { error: { message: "Invalid login" } }
      );
    }

    // Attach a session cookie to the response
    setCookie(event, "session", createSession(user));

    // Respond with the user
    return actionResponse(event, { user }, { redirect: "/devoirs" });
  },
});
