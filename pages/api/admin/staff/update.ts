import PostgresClient from '@lib/database';
import { staffQueries } from '@lib/sql';
import { StaffType } from '@ts-types/generated';
import type { NextApiRequest, NextApiResponse } from 'next';

class Handler extends PostgresClient {
  constructor() {
    super();
  }

  execute = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, body } = req;
    try {
      switch (method) {
        case this.POST: {
          const {
            id,
            firstName,
            lastName,
            phoneNumber,
            email,
            profile: { image = null },
            isAdmin = false
          } = body;

          const results = await this.tx(async (client) => {
            const staff = await this.authorization(client, req, res, true);

            const { rows } = await client.query<StaffType, string | number>(
              staffQueries.updateStaff(),
              [
                id,
                firstName,
                lastName,
                phoneNumber,
                email,
                image,
                isAdmin,
                staff.id
              ]
            );
            return { staff: rows[0] };
          });
          return res.status(200).json(results);
        }
        default:
          res.setHeader('Allow', ['POST']);
          res.status(405).end(`There was some error`);
      }
    } catch (error) {
      return res.status(500).json({
        error: {
          type: this.ErrorNames.SERVER_ERROR,
          message: error?.message,
          from: 'updateStaff'
        }
      });
    }
  };
}

export default new Handler().execute;
