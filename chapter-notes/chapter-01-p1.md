# Chapter 1: Introducing Kubernetes - Key Notes - Part 1

## Legacy Monolithic Applications

- Traditionally, software was built as **large monoliths**.
- Deployed as a **single process** or **few processes** on **limited servers**.
- These systems are still common today.
- Characteristics:
  - **Slow release cycles**
  - **Infrequent updates**
  - **Manual deployment and monitoring by ops teams**
  - **Manual hardware failure handling**

## Shift to Microservices

- Modern applications are broken into **microservices**:
  - **Smaller, independent components**
  - Can be **developed, deployed, updated, and scaled individually**
- Benefits:
  - Faster updates
  - Flexibility to meet rapid business changes

## Challenges of Microservices

- Increasing number of components makes:
  - **Configuration** and **management** harder
  - **Manual scheduling** inefficient
- Need for automation:
  - **Automatic deployment**
  - **Configuration and supervision**
  - **Failure handling**

## Enter Kubernetes

- **Kubernetes** automates application deployment and management.
- Empowers **developers** to deploy without ops team involvement.
- Benefits for **sysadmins**:
  - Handles **monitoring and rescheduling** on hardware failure
  - Focus shifts to managing **Kubernetes and infrastructure**

> 📝 **Note**: "Kubernetes" means *pilot* or *helmsman* in Greek.  
> Common pronunciations: *Koo-ber-nay-tace* or *Koo-ber-netties*.

## Kubernetes Capabilities

- **Abstracts hardware** infrastructure.
- Treats the entire datacenter as **one large computational resource**.
- **Automates component placement**, deployment, and intercommunication.
- Ideal for:
  - **On-prem datacenters**
  - **Cloud environments**

## Industry Adoption

- Major companies now see Kubernetes as:
  - The **standard platform** for running distributed apps
  - Suitable for both **cloud and on-premises** infrastructure

## Monolithic Applications

- Components are **tightly coupled** and run as a **single OS process**.
- Must be **developed, deployed, and managed as one unit**.
- Issues:
  - Any change requires **redeployment of the entire application**.
  - Over time, complexity grows due to **increasing inter-dependencies**.
  - Hard boundaries are missing, leading to **quality deterioration**.

## Scaling Monoliths

- Requires **powerful servers** with high resource capacity.
- Two scaling methods:
  - **Vertical Scaling (Scaling Up)**:
    - Add more CPU, RAM, etc.
    - Simple but **expensive** and **limited**.
  - **Horizontal Scaling (Scaling Out)**:
    - Add more servers and run **multiple replicas**.
    - Cheaper but **may require major code changes**.
    - Some components (e.g., **relational databases**) are hard to scale horizontally.
- If one part of a monolith can’t scale, **the whole system becomes unscalable**.

## Splitting into Microservices

- Complex monoliths are now being **split into smaller, independently deployable components**.
- Each **microservice runs as a separate process** and communicates via:
  - **Synchronous protocols** (e.g., HTTP/REST APIs)
  - **Asynchronous protocols** (e.g., AMQP)
- Microservices are:
  - Language-agnostic
  - Developed and deployed **independently**
  - Maintain **well-defined, static APIs**

## Benefits of Microservices

- **Independent scaling**: scale only the services that need it.
- **Flexibility** in development technologies and teams.
- **Horizontal and vertical scaling** per service is possible.

## Deployment Challenges

- More services = more complexity:
  - **Deployment decisions become harder**
  - **Managing inter-service dependencies** becomes complex
- Microservices need to:
  - **Find and communicate** with each other reliably
  - Be **configured** properly to work as a unified system
- Problems:
  - **Server failures require complex recovery processes**
  - **Debugging and tracing are harder** across distributed systems
    - Tools like **Zipkin** help with **distributed tracing**

## Environment Divergence

- Teams can use different languages, libraries, and tools.
- Leads to **dependency divergence**:
  - Different components may require **conflicting library versions**
  - Shared environments become **difficult to manage**

> 🧠 Deploying multiple microservices with different runtime requirements on the same host becomes a nightmare without proper isolation tools like containers.

## Environment Inconsistencies

- One of the **biggest challenges** in software development and operations:
  - **Differences in environments** where applications run.
- Variations occur:
  - Between **development and production**
  - Between **different production machines**
  - Even **within a single production machine over time**

## Sources of Differences

- **Hardware**
- **Operating Systems**
- **Available libraries and dependencies**
- **System configurations**
- **Networking setups**

## Consequences

- Conflicting library or runtime requirements across apps on the same server.
- Bugs that appear **only in production** due to environmental discrepancies.

## Ideal Solution

- Ensure applications run in **identical environments** in both development and production:
  - Same **OS**, **libraries**, **configurations**, and **networking**
- Goals:
  - **Stability over time**: minimize environmental drift
  - **Isolation**: allow multiple apps on the same server without affecting each other

> 🧩 Running apps in consistent and isolated environments greatly reduces environment-specific bugs and conflicts.

## Traditional Development Model

- Developers **build** the application.
- Operations (Ops) team **deploys and maintains** it.
- Responsibilities were **separated**, leading to gaps in ownership and understanding.

## DevOps: A Collaborative Approach

- Encourages **collaboration between developers, QA, and ops teams** throughout the application lifecycle.
- Developers are involved in **deployment and production maintenance**.
- Benefits:
  - Better understanding of **user needs** and **production challenges**.
  - More **frequent releases** and **faster feedback loops**.
  - Enables **user-driven development**.

## Streamlining Deployments

- Goal: Allow developers to **deploy applications independently**.
- Challenge: Developers often lack knowledge of:
  - **Datacenter infrastructure**
  - **Hardware organization**
- Solution needed to **abstract infrastructure complexity**.

## Let Everyone Focus on What They Do Best

- **Developers**:
  - Prefer creating features and improving UX.
  - Don’t want to manage OS patches or system updates.
- **Sysadmins (Ops)**:
  - Focus on **system security, performance, and infrastructure**.
  - Don’t want to deal with app-specific dependencies or impacts of infrastructure changes.

## NoOps: Autonomous Development and Deployment

- Developers deploy apps **without interacting with the ops team**.
- Still requires ops to manage **hardware and infrastructure**.
- NoOps = Developers focus on apps, Ops focus on infrastructure.

## Kubernetes: Enabling DevOps and NoOps

- **Abstracts hardware** and exposes a **unified deployment platform**.
- Developers can deploy apps **without infrastructure knowledge**.
- Sysadmins manage infrastructure **without needing app-specific context**.

> 🚀 Kubernetes empowers DevOps collaboration and enables NoOps by simplifying deployments and separating concerns between devs and ops.

## Introducing container technologies

- Kubernetes uses **Linux container** technologies to provide isolation of running
applications

## Problem with Traditional VMs

- As software components increase in **number** and **granularity**, giving each a dedicated **VM** becomes resource-intensive:
  - **Hardware waste** due to multiple full OS instances.
  - **Increased admin effort** to manage many VMs.

## Containers: A Lightweight Alternative

- Containers provide **process-level isolation** without needing separate OS instances.
- They **share the host OS kernel**, reducing overhead.
- Unlike VMs, containers start **instantly** and use **fewer system resources**.

## VMs vs Containers

| Feature              | Virtual Machines                        | Containers                              |
|----------------------|-----------------------------------------|-----------------------------------------|
| OS per instance      | Yes (guest OS per VM)                   | No (shared host OS kernel)              |
| Startup time         | Slow (boot required)                    | Fast (starts like a regular process)    |
| Resource usage       | High (system services + apps)           | Low (app process only)                  |
| Isolation level      | Strong (separate kernels)               | Medium (namespace + cgroup isolation)   |
| Scalability          | Limited (due to overhead)               | High (many containers per host)         |

## Container Isolation Mechanisms

### 1. **Linux Namespaces**

- Provides each process a **private view** of system resources.
- Types of namespaces:
  - `mnt` – Filesystems
  - `pid` – Process IDs
  - `net` – Network interfaces
  - `ipc` – Inter-process communication
  - `uts` – Hostname/domain name
  - `user` – User IDs
- Each container gets its **own namespaces**, appearing as if on its own machine.

### 2. **Control Groups (cgroups)**

- Enforces **resource usage limits** on containers:
  - CPU
  - Memory
  - Network bandwidth
- Prevents one process from **starving others** of resources.

> 🐧 Containers combine namespaces for **isolation** and cgroups for **resource control**, enabling scalable, efficient, and lightweight application deployment.

## What is Docker?

Docker is a **container platform** that made Linux containers **easily portable** across machines. It enables bundling:

- The **application**
- Its **dependencies**
- Even the **OS filesystem**

...into a **Docker image** that can be executed consistently across different environments.

### Key Benefits

- **Consistent behavior** across dev, test, and prod environments.
- **Environment independence**: Doesn’t rely on host libraries or configurations.
- **Lightweight alternative** to virtual machines.

---

## Docker vs. VMs

| Feature                   | Virtual Machines                        | Docker Containers                         |
|---------------------------|-----------------------------------------|-------------------------------------------|
| Isolation mechanism       | Hypervisor + Guest OS                   | Linux namespaces + cgroups                |
| System overhead           | High (OS for each VM)                   | Low (shared host kernel)                  |
| Startup time              | Slow (boot required)                    | Fast (instant start)                      |
| Image size                | Large                                   | Smaller, layered                          |
| Portability               | Very high (full OS)                     | High (host kernel-dependent)              |
| Architecture dependency   | None (full OS abstraction)              | Same architecture required (e.g. x86)     |

---

## Docker Core Concepts

- **Images**: Read-only templates (including files, dependencies, metadata, executable paths).
- **Registries**: Storage hubs for Docker images (e.g., Docker Hub, private registries).
- **Containers**: Isolated instances created from images. Each runs as a process with its own namespace and limited resources.

---

## How Docker Works

1. **Build**: Package app and environment into an image.
2. **Push**: Upload to a Docker registry.
3. **Pull**: Download the image on any machine running Docker.
4. **Run**: Docker spins up a container using the image.

---

## Image Layers and Efficiency

- Docker images are **composed of layers**, shared across images.
- Speeds up:
  - **Network transfers**
  - **Disk storage**
- Layers are **read-only**; each container adds a **writable top layer** (Copy-on-Write).

> 🧠 Example: Containers A and B based on the same image layers can read the same files. If A modifies a file, it creates a copy in its writable layer—B remains unaffected.

---

## Portability Caveats

- **Kernel dependency**: Containers use the **host’s Linux kernel**.
  - If an app needs a specific kernel version or module, it may not run.
- **Hardware dependency**: Containers are **architecture-specific**.
  - An x86-based container won’t run on an ARM system.

> 🛑 For full portability (kernel and architecture), use **virtual machines**.

---
