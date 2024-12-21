# Utility Network Validation Form Guide

This guide introduces the **Utility Network Validation Form**, a tool designed to assist utility professionals in customizing and validating network rules for systems such as electricity, gas, water, stormwater, wastewater, and telecommunications. By empowering teams to address critical infrastructure needs, this form enhances operational efficiency and ensures network accuracy.

---

## 1. Utility Network Rules

**Utility Network rules** are critical for maintaining system integrity, ensuring accurate and error-free connections within the network. These rules enforce proper relationships between components to replicate real-world infrastructure effectively.

### Types of Rules:
1. **Junction-Junction Connectivity Rules**: Define valid connections between compatible junctions (e.g., transformers and switches).
2. **Edge-Junction Connectivity Rules**: Specify how edges (e.g., power lines) connect to junctions (e.g., transformers).
3. **Edge-Edge Connectivity Rules**: Ensure proper connections between edges (e.g., pipelines or electric lines).
4. **Containment Rules**: Dictate objects that can contain others, such as enclosures housing electrical devices.
5. **Structural Attachment Rules**: Manage physical attachments like wires to poles or pipes to supports.

---

## 2. Challenges During Migration

Transitioning to the Utility Network often reveals challenges, including:

- **Mismatched Rules**: Predefined rules that do not align with specific utility requirements.
- **Missing Assets**: Unaccounted-for equipment during data migration.
- **Terminology Gaps**: Misaligned terms or classifications across teams.

Without customization, these issues can result in improper connections or inaccurate network representation.

---

## 3. Addressing Challenges with ArcGIS Survey123

The **Utility Network Rules Validation Form**, built with **ArcGIS Survey123**, allows both GIS and non-GIS professionals to contribute to the validation process, promoting collaboration across departments.

### How It Works:
1. An administrator creates and distributes the form.
2. Team members submit rules or flag issues using the form.
3. The administrator reviews the submissions and updates the rules in **ArcGIS Pro**.

This workflow ensures that utility network rules reflect operational expertise and meet organizational needs.

---

## 4. Technical Integration

The form leverages **XLSForm** and **JavaScript** to facilitate seamless validation and customization of network rules.

### XLSForm Structure:
- Each row corresponds to a specific rule to be validated or updated.

### JavaScript Integration:
- Custom JavaScript functions retrieve data and validate inputs, enhancing efficiency.

### Steps to Use the Code:

1. **Set Up the CSV File:**
    - Include headers: `FromAssetGroup`, `FromAssetType`, `ToAssetGroup`, `ToAssetType`.
    - Ensure data follows the required structure.

2. **Call the Function:**
    - Use the `getInterception()` function with parameters (e.g., `ToGroup` and `ToType`).
    - The function returns matching rules based on the input criteria.

3. **Replace the CSV URL (if needed):**
    - Update the `url` variable to point to the correct CSV file. Ensure the new file uses the same structure and headers.

4. **External Choices in Survey123:**
    - Match the `name` columns in your external choices with the CSV rules for proper integration.

---

## 5. Applications

The form is a versatile tool used **before** and **after migration** to the Utility Network.

### Pre-Migration Applications:
- **Rule Verification:** Cross-department collaboration ensures rules align with the organization’s infrastructure.
- **Rule Adaptation:** Input from engineers and designers guides the customization of rules, addressing equipment and terminology needs.

### Post-Migration Applications:
- **Error Reporting:** The mapping team identifies and flags issues during their work, such as missing rules or rules that permit incorrect connections between assets.
- **Rule Adjustments:** Teams propose new rules to accommodate evolving infrastructure needs.

---

## - ESRI ArcGIS Survey123 community: [Utility Network Rules Validation](https://survey123.maps.arcgis.com/home/item.html?id=49d126c346684a85ba25b6a7d0e88760) 
ATT: [I'm attaching an image that demonstrates how to locate it in the Survey123 Gallery](https://ago-item-storage.s3.amazonaws.com/a656fa57752f48d78b66a28a84bfe2b5/image.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCNjg6YDXEGvFpZb%2F07NRuOC5tUqwJi%2BEOCpTia%2BdkcEwIhANpCHA78M6SMI5xlbfr%2FZc5pi7eXnNIIiu%2FJVqbKx8BtKrwFCKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjA0NzU4MTAyNjY1IgyKZpvfFEAALkXtPy0qkAUZX8ZS9G%2BsRi7KeXdNvedKfoTRnkLuqoP041f1jVjH1mMem0gEHXPtBUzqaXqE%2FGBCjza5gcbQE3q%2BvLtUT6%2FnjX6GsOdrsmRoHl8dIpYkCzwiHTh4ZtQNJoAlA1P0t%2FXeafetaYKIwdDRLNTcaismRLIIxBCnR%2BQB%2FG6hd%2BGb67griQkwLohGliC1vIb8MEVY5o9QL0g%2BetKUZ%2B7HhLt1lS2bksxubHbhCovz6%2BLX8tY%2ByAPncwojaVHeZjYXMgsjA2kNku43dmMNVcH0htW3lVjM9ah1ax2JBqh8%2Fxeh9bLRqbFke5ugtNVM24WrhUiD%2FEg4NeterWDCD2g%2Bx%2FdsXDw%2B2HmmJJoCGQ3CUimvM4R%2FnfD%2FsQCENeZW0HJ3HEZgFVR%2FwK%2BWqZchRzNNfZiBbRzS%2BEPC1B46KfvP4ByoGAdNKuO80jTpdr72QuczWBNPDbzKTE7xXmN0eOtQGjDjuRIjY4WJGjivxo2loD7sfuolHCjCUE5CeUQABbIeho7itAIVRZXi21b26G4xEHBeoVgJiH%2FJL5u%2Fics3lTa893A16dtnJYMpoHXTYb%2FUGO69WwY8oUIdaTNOPOrQmKcrcWZm3xJo8YPnuWRq6l2uw8ZoxA2jY82F8AY9uH0cOl9x4b2Nr%2BeMCwJbS%2BRXBDBSEpofy3HqyflmtgIUp8Ro%2BZDvwoE5c78OEKj9kHT6VG0yKURjBGRXM7qbngQyv9cvVc0FIbeO11ajbr0RPGBQ%2FGzUEvrb%2B3zBoxIS8YqJvM4A%2FbOxHgE1QB%2BmzbyU5qY7zyuApoaZZQaeM8%2BPUCzJOCa4%2FGlManlnqOVBnyI985ahUN7KAlRnDDY1KGAUP2%2BG3D%2FjNbAQt85gTMhgErGiRjDhoZu7BjqwAfC%2BB69GhYCosc%2FJd7sm33r8THw0mWtOLSnpMKHfAxgEzmrTsEaup9hEhYDrq2e342xQpAYQIHoRUKhrFCcr7dBQp3YU5nf5N7gJqbYOB32tKltbOYTsCMQWqgWvfkRozAEiYojCNFYv8Ur60tv5UnPo%2BvePfCJxoXkaxUL%2Bd03hB%2ByKCZkxSeBbfSS093KtoH1qYRfZUdDJCUDnQWlM%2BzjnZClVyE03a4fHY8hBAe%2FP&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241221T154259Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAYZTTEKKE2URSDHJS%2F20241221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a7264e3e63f959e16797506226ea2fa90649000dbc71730651dc1b6b0c245d7d)

