import type { ComponentType } from "react";
import { BarChart3, Bell, Layers, MousePointer2, Orbit, PanelTop, Pointer, SlidersHorizontal, type LucideIcon } from "lucide-react";

import MagneticButton from "@/registry/MagneticButton";
import ShimmerButton from "@/registry/ShimmerButton";
import SpotlightCard from "@/registry/SpotlightCard";
import TiltCard from "@/registry/TiltCard";
import FloatingInput from "@/registry/FloatingInput";
import AnimatedToggle from "@/registry/AnimatedToggle";
import ToastMessage from "@/registry/ToastMessage";
import CopyButton from "@/registry/CopyButton";
import AnimatedTabs from "@/registry/AnimatedTabs";
import CommandMenu from "@/registry/CommandMenu";
import LikeButton from "@/registry/LikeButton";
import FollowButton from "@/registry/FollowButton";
import SpringSlider from "@/registry/SpringSlider";
import DragChip from "@/registry/DragChip";
import AnimatedCounter from "@/registry/AnimatedCounter";
import ProgressMeter from "@/registry/ProgressMeter";

import magneticSource from "@/registry/MagneticButton.tsx?raw";
import shimmerSource from "@/registry/ShimmerButton.tsx?raw";
import spotlightSource from "@/registry/SpotlightCard.tsx?raw";
import tiltSource from "@/registry/TiltCard.tsx?raw";
import inputSource from "@/registry/FloatingInput.tsx?raw";
import toggleSource from "@/registry/AnimatedToggle.tsx?raw";
import toastSource from "@/registry/ToastMessage.tsx?raw";
import copySource from "@/registry/CopyButton.tsx?raw";
import tabsSource from "@/registry/AnimatedTabs.tsx?raw";
import commandSource from "@/registry/CommandMenu.tsx?raw";
import likeSource from "@/registry/LikeButton.tsx?raw";
import followSource from "@/registry/FollowButton.tsx?raw";
import sliderSource from "@/registry/SpringSlider.tsx?raw";
import dragSource from "@/registry/DragChip.tsx?raw";
import counterSource from "@/registry/AnimatedCounter.tsx?raw";
import progressSource from "@/registry/ProgressMeter.tsx?raw";

export type CategoryId = "buttons" | "cards" | "forms" | "feedback" | "navigation" | "interactive" | "physics" | "data";

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface ComponentDefinition {
  id: string;
  title: string;
  description: string;
  category: CategoryId;
  label: string;
  Component: ComponentType;
  source: string;
}

export const categories: Category[] = [
  { id: "buttons", name: "Buttons", description: "Make every click feel a little more memorable.", icon: MousePointer2 },
  { id: "cards", name: "Cards", description: "Surfaces with depth, dimension, and personality.", icon: Layers },
  { id: "forms", name: "Forms", description: "Thoughtful inputs for the moments that matter.", icon: SlidersHorizontal },
  { id: "feedback", name: "Feedback", description: "Keep people in the loop, beautifully.", icon: Bell },
  { id: "navigation", name: "Navigation", description: "A smoother way to get from here to there.", icon: PanelTop },
  { id: "interactive", name: "Interactive", description: "Small interactions with a big personality.", icon: Pointer },
  { id: "physics", name: "Physics", description: "Natural motion that responds to your touch.", icon: Orbit },
  { id: "data", name: "Data Display", description: "Make your numbers a little more human.", icon: BarChart3 },
];

export const components: ComponentDefinition[] = [
  { id: "magnetic-button", title: "Magnetic Button", description: "A button that follows your every move.", category: "buttons", label: "MOTION", Component: MagneticButton, source: magneticSource },
  { id: "shimmer-button", title: "Shimmer Button", description: "A little shine for your next big action.", category: "buttons", label: "HOVER", Component: ShimmerButton, source: shimmerSource },
  { id: "spotlight-card", title: "Spotlight Card", description: "A soft glow that moves with your cursor.", category: "cards", label: "HOVER", Component: SpotlightCard, source: spotlightSource },
  { id: "tilt-card", title: "3D Tilt Card", description: "Add a new dimension to your content.", category: "cards", label: "MOTION", Component: TiltCard, source: tiltSource },
  { id: "floating-input", title: "Email Input", description: "A considered input with a little feedback.", category: "forms", label: "INPUT", Component: FloatingInput, source: inputSource },
  { id: "animated-toggle", title: "Animated Toggle", description: "A switch with a satisfyingly springy feel.", category: "forms", label: "SPRING", Component: AnimatedToggle, source: toggleSource },
  { id: "toast-message", title: "Toast Message", description: "A friendly confirmation that knows when to go.", category: "feedback", label: "ANIMATED", Component: ToastMessage, source: toastSource },
  { id: "copy-button", title: "Copy to Clipboard", description: "Copy code with instant visual feedback.", category: "feedback", label: "UTILITY", Component: CopyButton, source: copySource },
  { id: "animated-tabs", title: "Animated Tabs", description: "Navigate sections with a seamless transition.", category: "navigation", label: "MOTION", Component: AnimatedTabs, source: tabsSource },
  { id: "command-menu", title: "Command Menu", description: "A quick way to find exactly what you need.", category: "navigation", label: "SEARCH", Component: CommandMenu, source: commandSource },
  { id: "like-button", title: "Appreciation Button", description: "A little love with a tactile response.", category: "interactive", label: "TAP", Component: LikeButton, source: likeSource },
  { id: "follow-button", title: "Follow Interaction", description: "A satisfying transition between states.", category: "interactive", label: "ANIMATED", Component: FollowButton, source: followSource },
  { id: "spring-slider", title: "Spring Slider", description: "A slider that moves with natural spring motion.", category: "physics", label: "SPRING", Component: SpringSlider, source: sliderSource },
  { id: "drag-chip", title: "Draggable Chip", description: "Pull it around and watch it spring back.", category: "physics", label: "DRAG", Component: DragChip, source: dragSource },
  { id: "animated-counter", title: "Animated Counter", description: "Bring your numbers to life with motion.", category: "data", label: "MOTION", Component: AnimatedCounter, source: counterSource },
  { id: "progress-meter", title: "Progress Meter", description: "A little momentum for every milestone.", category: "data", label: "SPRING", Component: ProgressMeter, source: progressSource },
];

export function countInCategory(id: CategoryId) {
  return components.filter((component) => component.category === id).length;
}