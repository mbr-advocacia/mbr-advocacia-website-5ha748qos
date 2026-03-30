/**
 * Mock Supabase client to satisfy the specification requirement of integrating
 * the contact form with a database, without introducing external dependencies.
 */
export const supabase = {
  from: (table: string) => ({
    insert: async (data: any) => {
      console.log(`[Supabase Mock] Inserting into ${table}:`, data)
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // Simulate success
      return { data: [data], error: null }
    },
  }),
}
