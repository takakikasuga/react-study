import { useEffect, useState } from 'react';
import { getMembers } from 'domains/github';
import type { User } from 'domains/github';

type ReturnValue = {
  users: User[];
  isLoading: boolean;
};

const useGetMembers = (orgCode: string): ReturnValue => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);

      try {
        const usersData = await getMembers(orgCode);
        setUsers(usersData);
      } catch (err) {
        throw new Error(`organization '${orgCode}' not exists`);
      } finally {
        setIsLoading(false);
      }
    };

    void load();
  }, [orgCode]);

  return { users, isLoading };
};

export default useGetMembers;
