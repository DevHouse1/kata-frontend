import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../contexts/GlobalContext';

const CommandList = () => {
  const { commands, cancelCommand, validateCommand } = useContext(GlobalContext);

  return (
    <CommandListContainer>
      <h2>Command List</h2>
      {commands.length === 0 ? (
        <p>No commands found.</p>
      ) : (
        <CommandTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Total</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {commands.map((command) => (
              <tr key={command.id}>
                <td>{command.id}</td>
                <td>{command.statut}</td>
                <td>${command.lignes.reduce((prev, curr) => prev + (curr.product.prix * curr.quantite), 0)}</td>
                <td>
                  <DetailsList>
                    {command.lignes.map((l) => (
                      <li key={l.product.id}>
                        {l.product.nom} (x{l.quantite})
                      </li>
                    ))}
                  </DetailsList>
                </td>
                <td>
                  {command.status === 'CANCELED' ? (
                    <span>Canceled</span>
                  ) : (
                    <>
                      <CancelButton
                        onClick={() => cancelCommand(command.id)}
                        disabled={command.statut === 'ANNULEE' || command.statut === 'VALIDEE' || command.statut === 'EXPEDIEE'}>
                        Cancel
                      </CancelButton>

                      <ValidateButton
                        onClick={() => validateCommand(command.id)}
                        disabled={command.statut === 'ANNULEE' || command.statut === 'VALIDEE' || command.statut === 'EXPEDIEE'}>
                         Validate
                      </ValidateButton>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </CommandTable>
      )}
    </CommandListContainer>
  );
};

export default CommandList;

const CommandListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
  padding: 20px;

  h2 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const CommandTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #f5f5f5;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const DetailsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 5px;
  }
`;

const CancelButton = styled.button`
  padding: 8px 15px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  font-weight: bold;

  &:hover {
    background-color: darkred;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ValidateButton = styled.button`
  padding: 8px 15px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: darkolivegreen;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
