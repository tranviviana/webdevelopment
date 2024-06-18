import React, { useContext } from "react"
import { v4 as uuidV4 } from "uuid"
import useLocalStorage from "../hooks/useLocalStorage"

const BudgetsContext = React.createContext();

export function useBudgets() {
    return useContext(BudgetsContext);
}
// budgets { id: name: max: }
// expenses { id: budgetid: amount: description: }

export const BudgetsProvider = ( { children }) => {
    const [budgets, setBudgets] = useLocalStorage("budgets", []);
    const [expenses, setExpenses] = useLocalStorage("expenses",[]);
    function getBudgetExpenses(budgetid) {
        return expenses.filter(expense => expense.budgetid === budgetid);
    }
    function addExpense( { description, amount, budgetid }) {
        setExpenses(prevExpenses => {
            return [...prevExpenses, {id: uuidV4(), description, amount, budgetid}];
        })

    }
    function addBudget({ name, max }) {
        setBudgets(prevBudgets => {
            if (prevBudgets.find(budget => budget.name === name)) {
                return prevBudgets;
            };
            return [...prevBudgets, {id: uuidV4(), name, max}];
        })

    }
    function deleteBudget( {id}) {
        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id!== id);
        })
    }
    function deleteExpense( {id}) {
        //TODO: deal with expenses in uncategorized budgets
        setExpenses(prevExpenses => {
            return prevExpenses.filter(expense => expense.id!== id);
        })

    }
    return (
        <BudgetsContext.Provider
          value={{
            budgets,
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteBudget,
            deleteExpense,
          }}
        >
          {children}
        </BudgetsContext.Provider>
      )
    }
