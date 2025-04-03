const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  // Validate password strength
  if (formData.password.length < 6) {
    setError("Password must be at least 6 characters");
    setLoading(false);
    return;
  }

  const result = await register(formData);

  if (result.success) {
    navigate("/login", {
      state: {
        message: "Registration successful! Please login.",
      },
    });
  } else {
    setError(result.message);
  }
  setLoading(false);
};
