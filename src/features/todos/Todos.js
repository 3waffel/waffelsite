import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoAdded, todoToggled } from "./todosSlice";
import { Fieldset, Button, Page, Text, Input } from "@geist-ui/core";

export function Todos() {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();
	const [todoText, setTodoText] = useState("");

	return (
		<div>
			<Page>
			<Fieldset>
				<Input
					placeholder="What needs to be done?"
					value={todoText}
					onChange={(e) => setTodoText(e.target.value)}
				/>
				<Button
					aria-label="Add Todo"
					onClick={() =>
						dispatch(
							todoAdded({
								id: new Date().getTime(),
								text: todoText,
							})
						)
					}
				>
					<Text>Add</Text>
				</Button>
			</Fieldset>

			<Fieldset>
				<ul>
					{todos.map((todo) => (
						<li key={todo.id}>
							<input
								type="checkbox"
								checked={todo.completed}
								onChange={() =>
									dispatch(todoToggled({ id: todo.id }))
								}
							/>
							{todo.text}
						</li>
					))}
				</ul>
			</Fieldset>
			</Page>
			
		</div>
	);
}
