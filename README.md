BaseComponent

The toolkit components, HLayout, VLayout, HBox, VBox and Item, all derive from this class, which
allows them to assign a unique ID to each child element. These unique IDs constitue an addressing
scheme which allows us to target specific elements for events, such as a popup menu opening.

BaseComponent attaches an id property to each of your component's children automatically. In your
constructor, this is available through this.props. In your render function, you must wrap your
return value in a call to super.render. This allows your component to propagate its ID to its
children.