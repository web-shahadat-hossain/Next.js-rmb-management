export default async function getBalanceHistory() {
  const result = await fetch(
    "https://business-management-back-end.onrender.com/api/v1/balance",
    {
      next: {
        revalidate: 10,
      },
    },
  );

  return result.json();
}
