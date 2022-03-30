/**
 * Test your code here before moving it in a concrete chapter
 */

interface IView {
  readonly name: string;
}

interface IElement extends IView {}

interface IComponent extends IView {}

// Properties
interface IHaveId<T> {
  id: T;
}

interface IHaveNumberId extends IHaveId<number> {}

interface IHaveStringId extends IHaveId<string> {}

interface IHaveCaption {
  caption: string;
}

interface IHaveTooltip {
  tooltip: string;
}

interface IHaveIcon {
  icon: string;
}

interface IHaveLabel {
  label: string;
}

interface IHaveFullWidth {
  enableFullWidth();
  disableFullWidth();
}

// Functions
interface IToggleable {
  isEnabled(): boolean;
  isDisabled(): boolean;
  enable(): void;
  disable(): void;
}

interface ICollapsible {
  isCollapsed(): boolean;
  isExpanded(): boolean;
  collapse(): void;
  expand(): void;
}

interface IClickable {
  click(): void;
}

interface IViewBuilder<T extends IView> {
  build(): T;
}

interface IToggleableBuilder<
  TViewBuilder extends IViewBuilder<TView>,
  TView extends IView
> {
  enable(): TViewBuilder;
  disable(): TViewBuilder;
}

interface IButton extends IElement {}

interface ITable extends IComponent {}

interface IButtonBuilder
  extends IViewBuilder<IButton>,
    IToggleableBuilder<IButtonBuilder, IButton> {
  setCaption(caption: string): IButtonBuilder;
  setIcon(icon: string): IButtonBuilder;
}

interface ITableBuilder extends IViewBuilder<ITable> {}
