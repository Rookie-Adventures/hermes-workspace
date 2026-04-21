import { useEffect, useState } from 'react'
import {
  DialogContent,
  DialogRoot,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { HermesTask, CreateTaskInput, TaskColumn, TaskPriority, TaskAssignee } from '@/lib/tasks-api'
import { COLUMN_LABELS, COLUMN_ORDER } from '@/lib/tasks-api'
<<<<<<< HEAD
import { t } from '@/lib/i18n'
=======
>>>>>>> upstream/main

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  task?: HermesTask | null
  defaultColumn?: TaskColumn
  assignees: Array<TaskAssignee>
  onSubmit: (input: CreateTaskInput) => Promise<void>
  isSubmitting: boolean
}

export function TaskDialog({ open, onOpenChange, task, defaultColumn, assignees, onSubmit, isSubmitting }: Props) {
  const isEdit = Boolean(task)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [column, setColumn] = useState<TaskColumn>(defaultColumn ?? 'backlog')
  const [priority, setPriority] = useState<TaskPriority>('medium')
  const [assignee, setAssignee] = useState<string>('')
  const [tags, setTags] = useState('')
  const [dueDate, setDueDate] = useState('')

  useEffect(() => {
    if (task) {
      setTitle(task.title)
      setDescription(task.description)
      setColumn(task.column)
      setPriority(task.priority)
      setAssignee(task.assignee ?? '')
      setTags(task.tags.join(', '))
      setDueDate(task.due_date ?? '')
    } else {
      setTitle('')
      setDescription('')
      setColumn(defaultColumn ?? 'backlog')
      setPriority('medium')
      setAssignee('')
      setTags('')
      setDueDate('')
    }
  }, [task, open, defaultColumn])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim()) return
    await onSubmit({
      title: title.trim(),
      description: description.trim(),
      column,
      priority,
      assignee: assignee || null,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      due_date: dueDate || null,
    })
  }

  const inputClass = cn(
    'w-full rounded-lg border px-3 py-2 text-sm',
    'bg-[var(--theme-input)] border-[var(--theme-border)] text-[var(--theme-text)]',
    'focus:outline-none focus:ring-1 focus:ring-[var(--theme-accent)]',
    'placeholder:text-[var(--theme-muted)]',
  )

  const labelClass = 'block text-xs font-medium text-[var(--theme-muted)] mb-1'

  return (
    <DialogRoot open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[min(520px,95vw)] border-[var(--theme-border)] bg-[var(--theme-bg)] overflow-hidden">
        {/* Accent top border */}
        <div className="h-[3px] w-full" style={{ background: 'var(--theme-accent)' }} />

        <div className="p-5">
          <DialogTitle className="text-base font-semibold text-[var(--theme-text)] mb-1">
<<<<<<< HEAD
            {isEdit ? '编辑任务' : '新建任务'}
          </DialogTitle>
          <DialogDescription className="text-xs text-[var(--theme-muted)] mb-4">
            {isEdit ? '更新任务详情' : '填写新任务详情'}
=======
            {isEdit ? 'Edit Task' : 'New Task'}
          </DialogTitle>
          <DialogDescription className="text-xs text-[var(--theme-muted)] mb-4">
            {isEdit ? 'Update the task details below.' : 'Fill in the details for your new task.'}
>>>>>>> upstream/main
          </DialogDescription>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
<<<<<<< HEAD
              <label className={labelClass}>标题 *</label>
=======
              <label className={labelClass}>Title *</label>
>>>>>>> upstream/main
              <input
                className={inputClass}
                value={title}
                onChange={e => setTitle(e.target.value)}
<<<<<<< HEAD
                placeholder="需要完成什么？"
=======
                placeholder="What needs to be done?"
>>>>>>> upstream/main
                required
                autoFocus
              />
            </div>

            <div>
<<<<<<< HEAD
              <label className={labelClass}>描述</label>
=======
              <label className={labelClass}>Description</label>
>>>>>>> upstream/main
              <textarea
                className={cn(inputClass, 'resize-none')}
                rows={3}
                value={description}
                onChange={e => setDescription(e.target.value)}
<<<<<<< HEAD
                placeholder="可选详情..."
=======
                placeholder="Optional details..."
>>>>>>> upstream/main
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
<<<<<<< HEAD
                <label className={labelClass}>列</label>
=======
                <label className={labelClass}>Column</label>
>>>>>>> upstream/main
                <select
                  className={inputClass}
                  style={{ colorScheme: 'dark' }}
                  value={column}
                  onChange={e => setColumn(e.target.value as TaskColumn)}
                >
                  {COLUMN_ORDER.map(col => (
                    <option key={col} value={col}>{COLUMN_LABELS[col]}</option>
                  ))}
                </select>
              </div>
              <div>
<<<<<<< HEAD
                <label className={labelClass}>优先级</label>
=======
                <label className={labelClass}>Priority</label>
>>>>>>> upstream/main
                <select
                  className={inputClass}
                  style={{ colorScheme: 'dark' }}
                  value={priority}
                  onChange={e => setPriority(e.target.value as TaskPriority)}
                >
<<<<<<< HEAD
                  <option value="high">高</option>
                  <option value="medium">中</option>
                  <option value="low">低</option>
=======
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
>>>>>>> upstream/main
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
<<<<<<< HEAD
                <label className={labelClass}>负责人</label>
=======
                <label className={labelClass}>Assignee</label>
>>>>>>> upstream/main
                <select
                  className={inputClass}
                  style={{ colorScheme: 'dark' }}
                  value={assignee}
                  onChange={e => setAssignee(e.target.value)}
                >
<<<<<<< HEAD
                  <option value="">未分配</option>
=======
                  <option value="">Unassigned</option>
>>>>>>> upstream/main
                  {assignees.map(({ id, label }) => (
                    <option key={id} value={id}>{label}</option>
                  ))}
                </select>
<<<<<<< HEAD
              </div>
              <div>
                <label className={labelClass}>截止日期</label>
=======
                <p className="mt-1 text-[10px] text-[var(--theme-muted)]">
                  Assignee is separate from status. Dragging a card changes its column only.
                </p>
              </div>
              <div>
                <label className={labelClass}>Due Date</label>
>>>>>>> upstream/main
                <input
                  type="date"
                  className={inputClass}
                  style={{ colorScheme: 'dark' }}
                  value={dueDate}
                  onChange={e => setDueDate(e.target.value)}
                />
              </div>
            </div>

            <div>
<<<<<<< HEAD
              <label className={labelClass}>标签（逗号分隔）</label>
=======
              <label className={labelClass}>Tags (comma-separated)</label>
>>>>>>> upstream/main
              <input
                className={inputClass}
                value={tags}
                onChange={e => setTags(e.target.value)}
<<<<<<< HEAD
                placeholder="前端, bug, 研究"
=======
                placeholder="frontend, bug, research"
>>>>>>> upstream/main
              />
            </div>

            <div className="flex items-center justify-between pt-2">
<<<<<<< HEAD
              <p className="text-[10px] text-[var(--theme-muted)]">按 Esc 取消</p>
=======
              <p className="text-[10px] text-[var(--theme-muted)]">Press Esc to cancel</p>
>>>>>>> upstream/main
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => onOpenChange(false)}
                  disabled={isSubmitting}
                >
<<<<<<< HEAD
                  取消
=======
                  Cancel
>>>>>>> upstream/main
                </Button>
                <Button
                  type="submit"
                  size="sm"
                  disabled={isSubmitting || !title.trim()}
                  style={{ background: 'var(--theme-accent)', color: 'white' }}
                >
<<<<<<< HEAD
                  {isSubmitting ? '保存中...' : isEdit ? '保存更改' : '创建任务'}
=======
                  {isSubmitting ? 'Saving...' : isEdit ? 'Save Changes' : 'Create Task'}
>>>>>>> upstream/main
                </Button>
              </div>
            </div>
          </form>
        </div>
      </DialogContent>
    </DialogRoot>
  )
}
