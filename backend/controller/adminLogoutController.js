export const adminLogoutController = (req, res) => {
  res.clearCookie("adminToken", {
    httpOnly: true,  // ✅ Secure cookie removal
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  res.clearCookie("userToken", {
    httpOnly: true,  // ✅ Secure cookie removal
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  res.status(200).json({ success: true, message: "Logged out successfully" });
};
